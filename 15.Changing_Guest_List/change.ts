//Task 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

//List of people to invite to dinner
let guest_list = ['Ali', 'Usman', 'Khan', 'Talha'];

//Print a message to each person, inviting them to dinner
for (let m = 0; m < guest_list.length; m++) {
    console.log("Dear!" + " " + guest_list[m] + " " + "\nI hope this message finds you well. I'm writing to invite you to dinner at my home.\nThank You\n")
}

//Replacing the name of the guest who can’t make dinner
let old_name = "Usman";
let new_name = "Waqas";
guest_list[1] = new_name;

//Print a second set of invitation messages, one for each person who is still in your list.
for (let m = 0; m < guest_list.length; m++) {
    console.log("Dear!" + " " + guest_list[m] + " " + "\nI hope this message finds you well. I'm writing to invite you to dinner at my home.\nThank You\n")
}
console.log("Mr." + " " + old_name + " " + "\nWill not coming tomorrow at dinner."+"\nThank You")