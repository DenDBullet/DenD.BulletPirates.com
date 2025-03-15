"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const About = () => {
  return (
    <Box id="about" sx={{ display: "flex", justifyContent: "center", mt: 10, px: { xs: 2, sm: 4, md: 8 } }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ maxWidth: "1200px" }}>
        {/* Left: Masonry Image List */}
        <Grid item xs={12} md={6}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

        {/* Right: Description */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}>
            Our Story
          </Typography>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: "Poppins, sans-serif", fontStyle: "italic" }}>
            A Culinary Journey of Tradition & Heritage
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", fontFamily: "Poppins, sans-serif" }}>
            Kusi-nayon began as a humble family kitchen where recipes were passed down through generations.
            Today, we bring those authentic flavors and traditions to your table, creating a dining experience
            that honors our Filipino heritage.
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "text.secondary", fontFamily: "Poppins, sans-serif" }}>
            Every dish we serve is crafted with care, using time-honored techniques and the freshest ingredients.
            Our chefs blend traditional methods with contemporary presentation to create a menu that celebrates the
            rich culinary landscape of the Philippines.
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "text.secondary", fontFamily: "Poppins, sans-serif" }}>
            "Lutong Bahay, Lasang Nayon" – our philosophy means "Home Cooking, Village Taste," reflecting our
            commitment to authentic, soulful Filipino cuisine that tastes like home.
          </Typography>

          {/* Chef and Founder Section */}
          <Typography variant="h6" sx={{ mt: 4, mb: 2, fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}>
            Meet Our Head & Founder, Chef Juan Dela Cruz
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <Avatar alt="Chef Juan Dela Cruz" src="/images/avatars/chef.jpg" sx={{ width: 50, height: 50 }} />
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}>
                Chef Juan Dela Cruz
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", fontFamily: "Poppins, sans-serif" }}>
                Head Chef & Founder
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

const itemData = [
  { img: "https://images.unsplash.com/photo-1549388604-817d15aa0110", title: "Bed" },
  { img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31", title: "Books" },
  { img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6", title: "Sink" },
  { img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3", title: "Kitchen" },
  { img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3", title: "Blinds" },
  { img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622", title: "Chairs" },
  { img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77", title: "Laptop" },
  { img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61", title: "Doors" },
  { img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7", title: "Coffee" },
  { img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee", title: "Storage" },
  { img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62", title: "Candle" },
];

export default About;
