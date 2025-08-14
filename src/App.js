import React, { useState, useEffect } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/Footer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { CardMedia, CardContent } from "@material-ui/core";
import resumesData from "./resumes.json";
import { useStyles } from "./styles";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import LaunchIcon from "@material-ui/icons/Launch";
import HomeIcon from "@material-ui/icons/Home";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResumes, setFilteredResumes] = useState(resumesData);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter resumes based on category and search query
  useEffect(() => {
    let filtered = resumesData;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((resume) => resume.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((resume) =>
        resume.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resume.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredResumes(filtered);
  }, [selectedCategory, searchQuery]);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const appliedTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#00D4AA" : "#00A86B",
      },
      secondary: {
        main: darkMode ? "#FF6B6B" : "#FF6B6B",
      },
      background: {
        default: darkMode ? "#0A0A0A" : "#FAFAFA",
        paper: darkMode ? "#1A1A1A" : "#FFFFFF",
      },
      text: {
        primary: darkMode ? "#FFFFFF" : "#2C3E50",
        secondary: darkMode ? "#B0B0B0" : "#7F8C8D",
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: darkMode ? "none" : "none",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.9)",
              "& fieldset": {
                borderColor: darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.23)",
              },
              "&:hover fieldset": {
                borderColor: darkMode ? "rgba(255,255,255,0.5)" : "#00A86B",
              },
              "&.Mui-focused fieldset": {
                borderColor: darkMode ? "#00D4AA" : "#00A86B",
              },
            },
            "& .MuiInputLabel-root": {
              color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
            },
            "& .MuiInputBase-input": {
              color: darkMode ? "#FFFFFF" : "#000000",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.9)",
              "& fieldset": {
                borderColor: darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.23)",
              },
              "&:hover fieldset": {
                borderColor: darkMode ? "rgba(255,255,255,0.5)" : "#00A86B",
              },
              "&.Mui-focused fieldset": {
                borderColor: darkMode ? "#00D4AA" : "#00A86B",
              },
            },
            "& .MuiSelect-select": {
              color: darkMode ? "#FFFFFF" : "#000000",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
            color: darkMode ? "#FFFFFF" : "#000000",
            borderColor: darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.23)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? "#1A1A1A" : "#FFFFFF",
            color: darkMode ? "#FFFFFF" : "#000000",
            "& .MuiCardContent-root": {
              color: darkMode ? "#FFFFFF" : "#000000",
            },
            "& .MuiTypography-root": {
              color: darkMode ? "#FFFFFF" : "#000000",
            },
          },
        },
      },
    },
    typography: {
      fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1: {
        fontWeight: 700,
        fontSize: "3rem",
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 600,
        fontSize: "2.5rem",
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: "2rem",
        lineHeight: 1.4,
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1.5,
      },
      h5: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: 1.6,
      },
      h6: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 12,
    },
    shadows: [
      "none",
      "0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.07),0px 1px 3px 0px rgba(0,0,0,0.06)",
      "0px 3px 1px -2px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.07),0px 1px 5px 0px rgba(0,0,0,0.06)",
      "0px 3px 3px -2px rgba(0,0,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.07),0px 1px 8px 0px rgba(0,0,0,0.06)",
      "0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.07),0px 1px 10px 0px rgba(0,0,0,0.06)",
      "0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.07),0px 1px 14px 0px rgba(0,0,0,0.06)",
      "0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.07),0px 1px 18px 0px rgba(0,0,0,0.06)",
      "0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.07),0px 2px 16px 1px rgba(0,0,0,0.06)",
      "0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.07),0px 3px 14px 2px rgba(0,0,0,0.06)",
      "0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.07),0px 3px 16px 2px rgba(0,0,0,0.06)",
      "0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 0px rgba(0,0,0,0.07),0px 4px 18px 3px rgba(0,0,0,0.06)",
      "0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.07),0px 4px 20px 3px rgba(0,0,0,0.06)",
      "0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.07),0px 5px 22px 4px rgba(0,0,0,0.06)",
      "0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.07),0px 5px 24px 4px rgba(0,0,0,0.06)",
      "0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.07),0px 5px 26px 4px rgba(0,0,0,0.06)",
      "0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.07),0px 6px 28px 5px rgba(0,0,0,0.06)",
      "0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.07),0px 6px 30px 5px rgba(0,0,0,0.06)",
      "0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.07),0px 6px 32px 5px rgba(0,0,0,0.06)",
      "0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.07),0px 7px 34px 6px rgba(0,0,0,0.06)",
      "0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.07),0px 7px 36px 6px rgba(0,0,0,0.06)",
      "0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.07),0px 8px 38px 7px rgba(0,0,0,0.06)",
      "0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.07),0px 8px 40px 7px rgba(0,0,0,0.06)",
      "0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.07),0px 8px 42px 7px rgba(0,0,0,0.06)",
      "0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.07),0px 9px 44px 8px rgba(0,0,0,0.06)",
      "0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.07),0px 9px 46px 8px rgba(0,0,0,0.06)",
    ],
  });

  const getCategoryColor = (category) => {
    const colors = {
      "English": "#3498DB",
      "Español": "#E74C3C",
      "All": "#95A5A6"
    };
    return colors[category] || "#95A5A6";
  };

  return (
    <div className="App">
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        
        {/* Modern Header */}
        <AppBar position="static" elevation={0} className={classes.header}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h4" className={classes.logo}>
                📄 My Resumes
              </Typography>
              <Box className={classes.headerActions}>
                <Button
                  color="inherit"
                  href="https://jpromano.net"
                  className={classes.headerButton}
                  startIcon={<HomeIcon />}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={toggleDarkMode}
                  className={classes.themeToggle}
                  startIcon={darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                >
                  {darkMode ? "Light" : "Dark"}
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Hero Section */}
        <Box className={classes.heroSection}>
          <Container maxWidth="lg">
            <Fade in timeout={1000}>
              <Box className={classes.heroContent}>
                <Typography variant="h1" className={classes.heroTitle}>
                  Welcome to My Resumes
                </Typography>
                <Typography variant="h5" className={classes.heroSubtitle}>
                  Professional & Multilingual
                </Typography>
                <Typography variant="body1" className={classes.heroDescription}>
                  Explore my professional resumes in different languages. Click on any resume to view the full version.
                </Typography>
              </Box>
            </Fade>
          </Container>
        </Box>

        {/* Filters and Search Section */}
        <Container maxWidth="lg" className={classes.filtersSection}>
          <Paper 
            elevation={0} 
            className={classes.filtersPaper}
            style={{
              background: darkMode ? "rgba(26,26,26,0.95)" : "rgba(255,255,255,0.95)",
              border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <Select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className={classes.categorySelect}
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="All">All Languages</MenuItem>
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Español">Español</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  placeholder="Search resumes by title or language..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className={classes.searchField}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Chip
                  label={`${filteredResumes.length} resumes`}
                  color="primary"
                  variant="outlined"
                  className={classes.projectCounter}
                />
              </Grid>
            </Grid>
          </Paper>
        </Container>

        {/* Resumes Grid */}
        <Container maxWidth="lg" className={classes.projectsSection}>
          {filteredResumes.length === 0 ? (
            <Box className={classes.noResults}>
              <Typography variant="h6" color="textSecondary">
                No resumes found matching your criteria
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Try adjusting your search or language filter
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filteredResumes.map((resume, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Grow in timeout={300 + index * 100}>
                    <Card 
                      className={classes.projectCard} 
                      elevation={2}
                      style={{
                        backgroundColor: darkMode ? "#1A1A1A" : "#FFFFFF",
                        border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
                      }}
                    >
                      <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        image={require(`${resume.imageSrc}`)}
                        alt={resume.title}
                      />
                      <CardContent 
                        className={classes.cardContent}
                        style={{
                          color: darkMode ? "#FFFFFF" : "#000000",
                        }}
                      >
                        <Typography 
                          variant="h6" 
                          className={classes.projectTitle}
                          style={{
                            color: darkMode ? "#FFFFFF" : "#000000",
                          }}
                        >
                          {resume.title}
                        </Typography>
                        <Chip
                          label={resume.category}
                          size="small"
                          style={{
                            backgroundColor: getCategoryColor(resume.category),
                            color: "white",
                            marginTop: 8,
                            marginBottom: 8,
                          }}
                        />
                      </CardContent>
                      <CardActions 
                        className={classes.cardActions}
                        style={{
                          backgroundColor: darkMode ? "#1A1A1A" : "#FFFFFF",
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={resume.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.actionButton}
                          style={{
                            backgroundColor: darkMode ? "#00D4AA" : "#00A86B",
                            color: "#FFFFFF",
                          }}
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>

        {/* Footer */}
        <Box className={classes.footerSection}>
          <Container maxWidth="lg">
            <Footer />
          </Container>
        </Box>

        {/* Scroll to Top Button */}
        <Zoom in={showScrollTop}>
          <Fab
            color="primary"
            size="medium"
            onClick={scrollToTop}
            className={classes.scrollTopButton}
            aria-label="scroll to top"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </ThemeProvider>
    </div>
  );
}

export default App;