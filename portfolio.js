export const portfolioItemsByCategory = {
  
  
  "CDP": [
    { id: 3,src: "./assets/CDP'S/1000221670-05.jpeg",alt: "3"},
    { id: 11,src: "./assets/CDP'S/Copy of sureshraina-01.jpeg",alt: "11"},
    { id: 13,src: "./assets/CDP'S/sd cdp copy 8-03-01.jpeg",alt: "13"},
    
    { id: 1,src: "./assets/CDP'S/20210705_172119.png",alt: "1"},
    { id: 2,src: "./assets/CDP'S/20221121_194942 copy 5-02-01.jpeg",alt: "2"},
    { id: 4,src: "./assets/CDP'S/acdp 1 copy 2-01-01-01-01-01.jpeg",alt: "4"},
    { id: 5,src: "./assets/CDP'S/Copy of 422a58e4e00e2a3e62d6d2c2037a5c67 copy-alia latest-04.jpeg",alt: "5"},
    { id: 6,src: "./assets/CDP'S/Copy of 20220113_142552-Recovered-Recoveredlight (1)-04-01 (1).jpeg",alt: "6"},
    { id: 7,src: "./assets/CDP'S/Copy of sketch1625382024993-03 copy 4msd copy 22 07-02-Recovered-Recovered final version complete text C new.jpg",alt: "7"},
    { id: 8,src: "./assets/CDP'S/Copy of sketch1632143541566-01-03.jpeg",alt: "8"},
    { id: 10,src: "./assets/CDP'S/Copy of sketch1643108851096-01-03-03.jpeg",alt: "10"},
    { id: 12,src: "./assets/CDP'S/img. jpg (3)-15.jpeg",alt: "12"},
    { id: 14,src: "./assets/CDP'S/1.jpeg",alt: "14"},
    { id: 15,src: "./assets/CDP'S/2.jpeg",alt: "15"},
    { id: 16,src: "./assets/CDP'S/3.jpeg",alt: "15"},
    { id: 16,src: "./assets/CDP'S/4.jpg",alt: "15"},
    
    
  
  ],
  "Birthday Designs": [
    { id: 1,src: "./assets/posters/1000171298 (2).jpg",alt: "1"},
    { id: 2,src: "./assets/posters/1000216543.jpg",alt: "2"},
    { id: 3,src: "./assets/posters/D NV copy-04-02.jpeg",alt: "3"},
    { id: 4,src: "./assets/posters/image_search_1648533045812-11.jpeg",alt: "4"},
    { id: 5,src: "./assets/posters/msd vikram 45 (1)-01-01.jpeg",alt: "5"},
    { id: 6,src: "./assets/posters/spidynewlr (1)-03.jpeg",alt: "6"},
    { id: 7,src: "./assets/posters/Untitled-3-02.jpeg",alt: "7"},
    { id: 8,src: "./assets/posters/1.jpeg",alt: "8"},
    { id: 8,src: "./assets/posters/Picsart_25-04-18_23-43-19-580.jpg",alt: "8"},
    
    
    
  ],  
  "Manipulations": [
    { id: 1,src: "./assets/Manipulations/1678262689122 csk msd copy 7-06.jpeg",alt: "1"},
    { id: 1,src: "./assets/Manipulations/Copy of 20201223_113754.jpg",alt: "1"},
    { id: 1,src: "./assets/Manipulations/Copy of 1665724617582-Recovered-Recovered copy 3-Recovered lr blur (1)-03-02.jpeg",alt: "1"},
    { id: 1,src: "./assets/Manipulations/csk poster 2023 copy-01 (1)-09.jpeg",alt: "1"},
    { id: 1,src: "./assets/Manipulations/PicsArt_02-14-03.12.23 raina-01-02-04.jpeg",alt: "1"},
    { id: 1,src: "./assets/Manipulations/rk15. jpg-03-02-01-01-01-01.jpeg",alt: "1"},
    { id: 1,src: "./assets/Manipulations/1.jpeg",alt: "1"},
    { id: 1,src: "./assets/Manipulations/2.jpg",alt: "1"},
  ],
  "Retouching": [
  { id: 1,src: "./assets/retouching/20220106_162816.jpg",alt: "Mr Bean"},
  { id: 2,src: "./assets/retouching/20220829_184451.png",alt: "Shraddha Kapoor"},
  { id: 2,src: "./assets/retouching/1.jpeg",alt: "Shraddha Kapoor"},
  { id: 2,src: "./assets/retouching/2.jpg",alt: "Shraddha Kapoor"},
  { id: 2,src: "./assets/retouching/dh.jpeg",alt: "Shraddha Kapoor"},
  
  


   
  ],
  "Flyers & Cards": [
      { id: 1,src: "./assets/Flyers/20240329_234816.jpg",alt: "1"},
    { id: 2,src: "./assets/Flyers/20250227_140804.jpg",alt: "2"},
    { id: 3,src: "./assets/Flyers/20251210_121327.jpg",alt: "3"},
    { id: 4,src: "./assets/Flyers/invitation banner 2025.jpg",alt: "4"},
  ],
  "Other Designs": [
    { id: 1, src: "./assets/others/20191127_193510-01.jpeg", alt: "1" },
    { id: 1, src: "./assets/others/20201217_152328.jpg", alt: "1" },
    { id: 1, src: "./assets/others/20210428_105659.jpg", alt: "1" },
    { id: 1, src: "./assets/others/1.jpeg", alt: "1" },
    { id: 1, src: "./assets/others/2.jpeg", alt: "1" },
    { id: 1, src: "./assets/others/3.jpg", alt: "1" },
    { id: 1, src: "./assets/others/4.jpeg", alt: "1" },
    { id: 1, src: "./assets/others/5.png", alt: "1" },
    { id: 1, src: "./assets/others/6.jpeg", alt: "1" },
    { id: 1, src: "./assets/others/7.jpg", alt: "1" },
    { id: 1, src: "./assets/others/8.jpg", alt: "1" },
    { id: 1, src: "./assets/others/9.jpeg", alt: "1" },
    
  ],
};

// Flatten all items into one array for "All" category
export const portfolioItems = Object.entries(portfolioItemsByCategory).flatMap(
  ([category, items]) => items.map(item => ({ ...item, category }))
);
