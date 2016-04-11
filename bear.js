var user = prompt ("you're running through a field and suddenly come accross a word bear. Do you eat with him, run from him or learn from him?").toUpperCase();
switch (user) {
    case 'Eat':
        console.log("Do you know what are a bear's favorite things to eat?");
        if ( answer === "the bear eats honey" || "the bear eats vegetation") {
            console.log("you've won the game!");
        }
        else {
            console.log("keep asking");}
        break;
        case 'Run':
            console.log("Do you know which way to go?");
            if ( answer === "to the right" || "to the left") {
                console.log("You escaped!");
            }
            else {
                console.log (" Oh no, you have been eaten by a bear!"); }
            break;
        case 'Learn':
            console.log("What is the bear's favourite things?");
            if ( answer === " plants " ) {
                console.log("You can relax"); }
                else {
                    console.log ("There is room for improvement"); }
            break; 
            default:
            
            console.log("Run away!"); }