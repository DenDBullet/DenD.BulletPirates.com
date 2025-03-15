import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Button } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function MenuPage() {
  const [visibleImages, setVisibleImages] = useState(9);
  const [expanded, setExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();

  const handleLoadMore = () => {
    setVisibleImages(filteredData.length);
    setExpanded(true);
  };

  const handleHideImages = () => {
    setVisibleImages(9);
    setExpanded(false);
  };

  const handleImageClick = (id: string) => {
    router.push(`/menu/${id}`);
  };

  const filteredData =
    selectedCategory === 'all'
      ? itemData
      : itemData.filter((item) => item.category === selectedCategory);

  return (
    <Box sx={{ backgroundColor: 'hsl(36, 33%, 86%)', minHeight: '100vh', py: 5, px: { xs: 2, sm: 4, md: 8 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}>
          Our Menu
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, fontWeight: 'medium', fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}>
          A Taste of Filipino Heritage
        </Typography>
      </Box>

      {/* Category Filter Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
        {['all', 'appetizers', 'main', 'desserts'].map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            onClick={() => setSelectedCategory(category)}
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Poppins, sans-serif',
              backgroundColor: selectedCategory === category ? 'hsl(36, 50%, 50%)' : 'white',
              color: selectedCategory === category ? 'white' : '#A1A4A9',
              '&:hover': {
                backgroundColor: 'hsl(36, 50%, 50%)',
                color: 'white',
              },
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </Box>

      {/* Menu Grid */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ImageList sx={{ maxWidth: '900px', overflow: 'visible' }} cols={3} gap={16}>
          {filteredData.slice(0, visibleImages).map((item, index) => (
            <ImageListItem
              key={item.img}
              onClick={() => handleImageClick(item.id)}
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.5s',
                opacity: index < visibleImages ? 1 : 0,
                '&:hover': { transform: 'scale(1.05)', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)' },
              }}
            >
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography sx={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}>
                      ₱{item.price}
                    </Typography>
                  </Box>
                }
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Load More / Hide Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
        {!expanded && filteredData.length > visibleImages && (
          <Button
            variant="contained"
            onClick={handleLoadMore}
            sx={{
              backgroundColor: 'hsl(36, 50%, 50%)',
              fontWeight: 'bold',
              color: 'white',
              transition: 'transform 0.2s, background-color 0.3s, color 0.3s',
              '&:hover': {
                backgroundColor: 'white',
                color: '#A1A4A9',
                transform: 'scale(1.05)',
              },
            }}
          >
            View More
          </Button>
        )}
        {expanded && (
          <Button
            variant="contained"
            onClick={handleHideImages}
            sx={{
              backgroundColor: 'white',
              fontWeight: 'bold',
              color: 'hsl(36, 50%, 50%)',
              transition: 'transform 0.2s, background-color 0.3s, color 0.3s',
              '&:hover': {
                backgroundColor: 'hsl(36, 50%, 50%)',
                color: 'white',
                transform: 'scale(1.05)',
              },
            }}
          >
            Hide Menu
          </Button>
        )}
      </Box>
    </Box>
  );
}

// Menu Data with Prices
const itemData = [
  { id: 'ginataan-na-sugpo', img: '/images/cards/7.jpg', title: 'Ginataan Na Sugpo', category: 'appetizers', price: 180 },
  { id: 'lumpiang-sariwa', img: '/images/cards/8.jpg', title: 'Lumpiang Sariwa', category: 'main', price: 220 },
  { id: 'halo-halo', img: '/images/cards/9.jpg', title: 'Halo-Halo', category: 'desserts', price: 150 },
  { id: 'fruit-salad', img: '/images/cards/12.jpg', title: 'Fruit Salad', category: 'appetizers', price: 120 },
  { id: 'lumpiang-shanghai', img: '/images/cards/13.jpg', title: 'Lumpiang Shanghai', category: 'main', price: 200 },
  { id: 'palitaw', img: '/images/cards/14.jpg', title: 'Palitaw', category: 'desserts', price: 100 },
  { id: 'chicken-adobo', img: '/images/cards/15.jpg', title: 'Chicken Adobo', category: 'appetizers', price: 250 },
  { id: 'sinigang-na-baboy', img: '/images/cards/18.jpg', title: 'Sinigang na Baboy', category: 'main', price: 280 },
  { id: 'lechon-kawali', img: '/images/cards/17.jpg', title: 'Lechon Kawali', category: 'desserts', price: 320 },
  { id: 'chicken-adobo', img: '/images/cards/15.jpg', title: 'Chicken Adobo', category: 'appetizers', price: 250 },
  { id: 'sinigang-na-baboy', img: '/images/cards/18.jpg', title: 'Sinigang na Baboy', category: 'main', price: 280 },
  { id: 'lechon-kawali', img: '/images/cards/17.jpg', title: 'Lechon Kawali', category: 'desserts', price: 320 },
];
