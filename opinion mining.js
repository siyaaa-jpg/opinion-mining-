document.addEventListener('DOMContentLoaded', function () {
    var analyzeButton = document.getElementById('analyzeButton');
    var opinionInput = document.getElementById('opinionInput');
    var resultContainer = document.getElementById('resultContainer');

    analyzeButton.addEventListener('click', function () {
        var opinion = opinionInput.value.trim();

        if (opinion !== "") {
            var sentiment = analyzeSentiment(opinion);
            displayResult(sentiment);
        } else {
            alert("Please enter an opinion before analyzing.");
        }
    });

    function analyzeSentiment(opinion) {
        // List of positive keywords and synonyms
        var positiveKeywords = ['good', 'proud', 'great', 'excellent', 'positive', 'fantastic', 'amazing'];

        // Convert the opinion to lowercase for case-insensitive comparison
        var lowercasedOpinion = opinion.toLowerCase();

        // Check if the opinion contains any positive keyword
        var isPositive = positiveKeywords.some(function (keyword) {
            return lowercasedOpinion.includes(keyword);
        });

        return isPositive ? 'Positive' : 'Negative';
    }

    function displayResult(sentiment) {
        resultContainer.innerHTML = "<strong>Result:</strong> " + sentiment + " sentiment";
    }
});
