// import React from 'react';
// import './CertificateSection.css'; // This is where you place your original CSS

// function CertificateSection() {
//     return (
//         <div className='border-white border-2 border-inset w-full min-h-screen bg-black text-white flex flex-col items-center px-4 justify-between'>
//             <h2 className='pt-15 text-6xl font-["Saira_Stencil_One"] font-bold text-white'>CERTIFICATE</h2>

//             <div className='page fs w-7/12'>
//                 <a target="_blank" rel="noopener noreferrer" href="https://www.pexels.com/photo/landscape-photo-of-green-trees-and-mountains-2088167/">
//                     Img A
//                 </a>
//             </div>

//             <div className='page sc w-7/12'>
//                 <a target="_blank" rel="noopener noreferrer" href="https://www.pexels.com/photo/body-of-water-near-green-mountain-931018/">
//                     Img B
//                 </a>
//             </div>

//             <div className='page th w-7/12'>
//                 <a target="_blank" rel="noopener noreferrer" href="https://www.pexels.com/photo/trees-on-mountain-3551227/">
//                     Img C
//                 </a>
//             </div>

//             <div className='page fr w-7/12'>
//                 <a target="_blank" rel="noopener noreferrer" href="https://www.pexels.com/photo/dramatic-red-sunset-over-waving-ocean-6775273/">
//                     Img D
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default CertificateSection;
function CertificateSection() {
  const data = [
    {
      label: "Img A",
      link: "https://www.pexels.com/photo/landscape-photo-of-green-trees-and-mountains-2088167/",
      image: "/images/imgA.jpg",
    },
    {
      label: "Img B",
      link: "https://www.pexels.com/photo/body-of-water-near-green-mountain-931018/",
      image: "/images/imgB.jpg",
    },
    {
      label: "Img C",
      link: "https://www.pexels.com/photo/trees-on-mountain-3551227/",
      image: "/images/imgC.jpg",
    },
    {
      label: "Img D",
      link: "https://www.pexels.com/photo/dramatic-red-sunset-over-waving-ocean-6775273/",
      image: "/images/imgD.jpg",
    },
  ];

  return (
    <div className="bg-black text-white px-4 py-10 flex flex-col items-center">
      <h2 className='text-6xl font-["Saira_Stencil_One"] mb-10'>CERTIFICATE</h2>
      <div className="flex flex-col items-center gap-20 w-full max-w-4xl">
        {data.map((item, index) => (
          <div key={index} className="relative w-full h-screen shadow-lg rounded-2xl overflow-hidden">
            <img
              src={`${item.link}`}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificateSection;
