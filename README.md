# Etch A Sketch

### Overview

The Etch A Sketch is an interactive web-based drawing application that recreates the classic toy experience built as part of The Odin Project curriculum. Users can create pixel art by hovering over a customizable grid, with options for random colors, opacity effects, and adjustable grid sizes. The application features a clean, responsive interface with real-time drawing capabilities and easy reset functionality.

### Features

- **Customizable Grid Size**: Choose any grid size from 1x1 to 100x100 squares
- **Multiple Drawing Modes**:
  - Standard yellow drawing
  - Random color mode with dynamic hex color generation
  - Progressive opacity mode for layered effects
- **Interactive Drawing**: Hover-based drawing mechanism
- **One-Click Reset**: Clear the entire canvas instantly
- **Responsive Design**: Works across different screen sizes
- **Real-time Visual Feedback**: Immediate color changes on hover
- **Input Validation**: Prevents invalid grid sizes and crashes

### Technologies Used

- **HTML**: For structuring the drawing interface and controls
- **CSS**: For styling, layout, and visual effects with flexbox
- **JavaScript**: For grid generation, drawing logic, DOM manipulation, and user interactions

### Live Demo

Check out the live application here: [Etch A Sketch](https://jkgyso.github.io/etch-a-sketch/)

### How to Use

1. Visit the website using the link above
2. Click `Enter # of squares` to set your desired grid size(1-100)
3. Choose your drawing options:
   - Check `Randomize Color` for multi-colored drawing
   - Check `Opacity` for progressive transparency effects
4. Hover over the grid squares to start drawing
5. Use the `Reset` button to clear your artwork and start over
6. Experiment with different grid sizes and color modes

### Drawing Modes

- **Standard Mode**: Creates yellow trails as you hover
- **Random Color Mode**: Each square gets a unique random color
- **Opacity Mode**: Squares become progressively more opaque with repeated hovers(10% increments up to 100%)
- **Combined Modes**: Use random colors with opacity for advanced effects

### Installation(For Local Viewing)

If you'd like to run the project locally:

1. Clone the repository: `git clone https://github.com/yourusername/etch-a-sketch.git`
2. Open the project folder and launch `index.html` in a browser
3. Start drawing immediately - no additional setup required

### Key Programming Concepts Demonstrated

- **DOM Manipulation**: Dynamic grid creation and styling
- **Event Handling**: Mouse events and user input validation
- **Color Theory**: Random hex color generator
- **Data Attributes**: Opacity state management
- **Input Validation**: Error handling

### References

- **Project Inspiration**: The Odin Project Curriculum
- **Classic Toy**: Based on the original Etch A Sketch drawing toy
- **Color Generation**: Mathematical approach to random hex color creation
