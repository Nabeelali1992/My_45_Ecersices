// Making funtion show_magicians()

function show_magicians(magician: string[]) {
    magician.forEach((name) => console.log(name));
  }
  
  // Making function make_great()
  function make_great(magician: string[]) {
    return magician.map((name) => (name = `The Great ${name}`));
  }
  
  // Making an array of magicians
  let magician_name = ["Hermione", "Harry Poter", "Rohn"];
  
  // Making a Copy of Original Array through .Slice()Function
  
  let copy_magician_name = magician_name.slice();
  
  // Calling function make_great() to add The Great with magician names
  let copy_great_magician = make_great(copy_magician_name);
  
  // Show both arrays Original and Copied
  
  // Original
  console.log("\nOriginal Magician Names\n");
  show_magicians(magician_name);
  
  //Copied
  console.log("\nCopied Magician Names\n");
  show_magicians(copy_great_magician);