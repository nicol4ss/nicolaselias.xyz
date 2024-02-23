interface InfoProps {
  infos: {
    Name: string;
    LastName: string;
  };
  office: {
    Occupation: string;
    Enterprise: string;
  };
  translate: boolean;
}

function InfoComponent({ infos, office, translate }: InfoProps) {
  return (
    <>
      <div className="mb-4 text-white">
        <p className="text-blue-600">
          {translate ? "//My presentation" : "//Minha apresentação"}
        </p>
        <p className="text-white">Info myInfo;</p>
        <p>
          myInfo.<span className="text-pink-500">setName</span>("
          <span className="text-green-300">{infos.Name}</span>");
        </p>
        <p>
          myInfo.<span className="text-pink-500">setLastName</span>("
          <span className="text-green-300">{infos.LastName}</span>");
        </p>
      </div>

      <div className="text-white">
        <p className="text-blue-600">
          {translate ? "//Actual office" : "//Trabalho atual"}
        </p>
        <p className="text-white">Office myOffice;</p>
        <p>
          myOffice.<span className="text-pink-500">setOccupation</span>("
          <span className="text-green-300">{office.Occupation}</span>");
        </p>
        <p>
          myOffice.<span className="text-pink-500">setEnterprise</span>("
          <span className="text-green-300">{office.Enterprise}</span>");
        </p>
      </div>
    </>
  );
}

export default InfoComponent;
