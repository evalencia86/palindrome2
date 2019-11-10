$(function () {

    $("#word").keyup(function () {
        const inputWord = $(this).val();

        if (!inputWord.trim()) {
            // Input is empty
            $("#palindrome-message").hide();
            return
        }

        $("#query").text(inputWord);

        if (isPalindrome(inputWord)) {
			$("#palindrome-message").removeClass()
			$("#palindrome-message").addClass("message-green");
			$("#result").text('is a palindrome.');
        } else {
			$("#palindrome-message").removeClass()
			$("#palindrome-message").addClass("message-red");
			$("#result").text('is not a palindrome');

        }

        $("#palindrome-message").show();

    });

});

function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('');
}
