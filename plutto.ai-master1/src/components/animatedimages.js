import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: '/3D.png', glowColor: '#5d9d9d' }, // Teal
  { src: '/3d1.png', glowColor: '#e56d3b' }, // Orange
  { src: '/3d2.png', glowColor: '#f770f7' }, // Pink/Purple
  { src: '/3d3.png', glowColor: '#000' },    // Grey (You might want a brighter color for visibility)
  { src: '/3d4.png', glowColor: '#5d9d9d' }, // Teal
];

const AnimatedImages = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Define the rotation angles for each image container
  // These angles will place them along an arc.
  // The first angle is for the container's rotation around a central point,
  // the second rotate is to orient the item *along* that path.
  const rotationTransforms = [
    'rotate(-52deg) translateY(-80px)', // Left-most
    'rotate(-22deg) translateY(-141px)', // Left-center
    'rotate(0deg) translateY(-180px)',   // Center
    'rotate(20deg) translateY(-143px)',  // Right-center
    'rotate(45deg) translateY(-80px)',  // Right-most
  ];

  return (
    <div
      className="flex bg-black bg-image justify-center items-center w-screen h-screen relative overflow-hidden"
      // Example for background image:
      // style={{ backgroundImage: 'url(/your-dark-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div 
        // Arc container: This is the reference point for the rotations
        className="relative w-[600px] h-[300px] flex justify-center items-end"
        // The bottom-center of this div will be the pivot for the arc.
        // We set height to allow for translateY(-250px) to place items up.
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`
              absolute w-[100px] h-[100px] bg-white rounded-[20px] backdrop-blur-sm
              flex justify-center items-center transition-all duration-500 will-change-transform
              origin-[50%_100%]                           /* Set pivot to bottom-center of the parent */
              ${hoveredImage === index ? 'scale-110 z-10' : ''}
            `}
            style={{
              // Apply the rotation transform to position it on the arc
              transform: rotationTransforms[index],
              // Apply custom box-shadow for glow effect
              boxShadow: hoveredImage === index ? `0 0 25px 5px ${img.glowColor}` : 'none',
              // Use Tailwind's arbitrary value for initial left position to spread them out
              left: `calc(50% + ${ (index - 2) * 100}px)`, /* Adjust 100px for spacing */
              // Reset left to ensure origin works correctly relative to parent
              marginLeft: '-50px', // Center the item based on its own width
            }}
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={img.src}
              alt={`Animated image ${index + 1}`}
              width={60} // Adjusted image size slightly to fit within the 100px wrapper
              height={60}
              className="object-contain" // Ensures image scales down to fit
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedImages;