//NOTE TO SELF: I'd really like to make a variation of this project called starry notes
// Instead of a grid background there would be a galaxy
// The load spinner would be replaced with a spinning planet icon
// When you're done with a note, you can click the x button (which is a red star) and it will be crumpled up into a little star
// And make you can link notes together with lines, like stars in a constellation

import NotePage from "./pages/NotePage";
import NoteProvider from "./context/NoteContext";
 
function App() {
    return (
        <div id="app">
            <NoteProvider>
                <NotePage />
            </NoteProvider>
        </div>
    );
}

export default App
