//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//List of people to invite to dinner
var guest_list = ['Ali', 'Usman', 'Khan', 'Talha'];
//Print a message to each person, inviting them to dinner
// for (let m = 0; m < guest_list.length; m++) {
//     console.log("Dear!" + " " + guest_list[m] + " " + "\nI hope this message finds you well. I'm writing to invite you to dinner at my home.\nThank You\n")
// }
//Replacing the name of the guest who can’t make dinner
var old_name = "Usman";
var new_name = "Waqas";
guest_list[1] = new_name;
//Print a second set of invitation messages, one for each person who is still in your list.
for (var m = 0; m < guest_list.length; m++) {
    console.log("Dear!" + " " + guest_list[m] + " " + "\nI hope this message finds you well. I'm writing to invite you to dinner at my home.\nThank You\n");
}
console.log("Mr." + " " + old_name + " " + "\nWill not coming tomorrow at dinner." + "\nThank Youn\n");
guest_list.unshift('Shaheen');
for (var m = 0; m < guest_list.length; m++) {
    console.log("Dear!" + " " + guest_list[m] + " " + "\nI hope this message finds you well. I'm writing to invite you to dinner at my home.\nThank You\n");
}
