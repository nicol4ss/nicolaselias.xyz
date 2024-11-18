import { useRef, useEffect } from "react";
import {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  ShaderMaterial,
  PlaneGeometry,
  Mesh,
  Vector3,
  Vector2,
} from "three";
import fragmentShader from "../shaders/fragmentShader.glsl";
import vertexShader from "../shaders/vertexShader.glsl";

const Shader = () => {
  const mountRef = useRef(null);
  const mousePosition = useRef(new Vector2(0, 0));
  const targetMouse = useRef(new Vector2(0, 0));

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const renderer = new WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      0.1,
      1000
    );
    camera.position.z = 1;

    const shaderMaterial = new ShaderMaterial({
      uniforms: {
        iResolution: { value: new Vector3(width, height, 1) },
        iTime: { value: 0 },
        iMouse: { value: new Vector2(0, 0) },
      },
      vertexShader,
      fragmentShader,
    });

    const geometry = new PlaneGeometry(width, height);
    const mesh = new Mesh(geometry, shaderMaterial);
    scene.add(mesh);

    const animate = (time) => {
      shaderMaterial.uniforms.iTime.value = time * 0.001;
      mousePosition.current.lerp(targetMouse.current, 0.1);
      shaderMaterial.uniforms.iMouse.value.copy(mousePosition.current);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      renderer.setSize(newWidth, newHeight);
      shaderMaterial.uniforms.iResolution.value.set(newWidth, newHeight, 1);
    };

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      targetMouse.current.set(mouseX, height - mouseY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Shader;
