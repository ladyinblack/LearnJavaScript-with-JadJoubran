// import {getNextAge} from "./age.js";

const age = document.querySelector("#your-age");
const nextAge = document.querySelector("#next-age");

// The 'input' event correctly captures changes from the arrows and typing.
age.addEventListener("input", () => {
    nextAge.textContent = getNextAge(age.value);
});

/**
 * Jad Joubran's initial code made use of the 'keyup' event.  However, the 
 * arrow buttons on an <input type="number" do not trigger the `keyup` event. 
 * Instead, you should listen for the `input` or `change` event.
 * 
 * The `input` event fires immediately whenever the value of the form element is 
 * changed by the user, including when the up and down arrow buttons are clicked.
 * 
 * The `change` event also works, but it only fires after the user "commits" 
 * the change.  For a number input, this happens when the input element loses 
 * focus (for example, by clicking outside of it).  It does not provide the 
 * immediate, real-time feedback that the `input` event does.
 */