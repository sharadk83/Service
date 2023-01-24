// import React, { useState } from 'react';

// function Test() {
//   const [data, setData] = useState([
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'John', age: 35 },
//     { name: 'Jack', age: 40 },
//     { name: 'Jill', age: 20 }
//   ]);

//   const uniqueNames = [...new Set(data.map(item => item.name))];

//   return (
//     <div>
//       <h1>Unique Names</h1>
//       <ul>
//         {uniqueNames.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Test;