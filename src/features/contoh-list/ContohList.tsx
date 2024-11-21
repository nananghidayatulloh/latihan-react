export default function ContohList(){

    interface Biodata{
        name: string;
        age: number;
    }
    
    const biodata : Biodata[]=[
        {
            name:"Adi",
            age: 20
        },
        {
            name:"John",
            age: 21
        },
        {
            name:"Arnold",
            age: 26
        },
        {
            name:"Sarah",
            age: 22
        }
    ];

    return (
        <>
          <ul>
        {biodata.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
        </>
      ); 
}