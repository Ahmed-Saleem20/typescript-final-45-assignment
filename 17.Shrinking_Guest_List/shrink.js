//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
// for (let m = 0; m < guest_list.length; m++) {
//     console.log("Dear!" + " " + guest_list[m] + " " + "\nI hope this message finds you well. I'm writing to invite you to dinner at my home.\nThank You\n")
// }
// console.log("Mr." + " " + old_name + " " + "\nWill not coming tomorrow at dinner."+"\nThank Youn\n")
guest_list.unshift('Shaheen');
// for (let m = 0; m < guest_list.length; m++) {
//     console.log("Dear!" + " " + guest_list[m] + " " + "\nI hope this message finds you well. I'm writing to invite you to dinner at my home.\nThank You\n")
// }
console.log('\nI am invite only two people for dinner.\n');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log('Sorry Bhai' + " " + remove_guest + '\nYou are not invited for dinner\n');
}
for (var m = 0; m < guest_list.length; m++) {
    console.log("Dear!" + " " + guest_list[m] + " " + "\nYou are still invited on tommorow dinner.\nThank You\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
