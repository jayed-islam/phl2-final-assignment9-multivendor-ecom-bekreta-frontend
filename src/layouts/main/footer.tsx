import React from "react";
import { Box, Typography, IconButton, Container, Stack } from "@mui/material";
import logo from "../../../public/assets/logo/iqa-logo-h.svg";
import Image from "next/image";
import YoutubeIcon from "@/components/icons/youtube-icon";
import FacebookIcon from "@/components/icons/facebook-icon";
import { footerNavConfs } from "./config-navigations";
import Link from "next/link";
import colors from "@/theme/colors";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F6F6F6",
        px: {
          xs: "11px",
          xl: 0,
        },
        pt: "3rem",
        pb: "1.5rem",
        borderTop: "1px solid #E7E7E7",
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Stack
          direction="row"
          sx={{
            alignItems: "start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            pb: "2rem",
          }}
        >
          {/* First Column */}
          <Box
            sx={{
              maxWidth: "22.5rem",
            }}
          >
            <Image
              src={logo}
              alt="iqa logo horiz"
              style={{
                height: "2.25rem",
                width: "15.625rem",
              }}
            />
            <Typography variant="body1" color="#3D3D3D" mt="1.5rem">
              ইসলামী প্রশ্নোত্তর. দুনিয়াবি জীবনকে আখিরাতের জন্য প্রস্তুত করতে
              গিয়ে কত প্রশ্নই না আসে আমাদের অন্তরে, আল্লাহর বান্দাদের সেসব
              প্রশ্নের উত্তর খোঁজার চেষ্টা করেছেন শায়খ আহমাদুল্লাহ.
            </Typography>
            <Box sx={{ display: "flex", gap: "1.5rem", mt: "2rem" }}>
              <IconButton
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  border: "1px solid #D9D9DE",
                  p: "0.5rem",
                }}
              >
                <YoutubeIcon />
              </IconButton>
              <IconButton
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  border: "1px solid #D9D9DE",
                  p: "0.5rem",
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Second Column */}
          <Box
            sx={{
              maxWidth: "22.5rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: colors.blackWhiteBlack,
              }}
            >
              জনপ্রিয় লিংক
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                flexWrap: "wrap",
                columnGap: "2.5rem",
                rowGap: "0.75rem",
                mt: "1.5rem",
              }}
            >
              {footerNavConfs.map((item, idx) => (
                <Link
                  href={item.path}
                  key={idx}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>

          {/* Third Column */}
          <Box>
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: colors.blackWhiteBlack,
              }}
            >
              সার্বিক-সহযোগিতায়
            </Typography>
            <Typography variant="body1" mt="1.5rem">
              As-Sunnah Web Development Team
            </Typography>
          </Box>
        </Stack>
        <Box
          sx={{
            borderTop: "1px solid #E7E7E7",
            pt: "1rem",
          }}
        >
          <Typography variant="body1" textAlign="center" color="#6D6D6D">
            স্বত্ব © 2024 আস-সুন্নাহ ফাউন্ডেশন - সর্ব স্বত্ব সংরক্ষিত
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
