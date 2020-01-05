$(document).ready(function () {
    resetValues();
    $(".winBoard").hide();

    var compImgRef = {
        1: "stoneBtn",
        2: "paperBtn",
        3: "scissorBtn"
    };

    var scoreDict = {
        stoneBtn: 1,
        paperBtn: 2,
        scissorBtn: 3
    };

    var imageDict = {
        stoneBtn: "https://image.flaticon.com/icons/svg/214/214296.svg",
        paperBtn: "https://image.flaticon.com/icons/svg/782/782795.svg",
        scissorBtn: "https://image.flaticon.com/icons/svg/2132/2132689.svg"
    };

    $(".selBtn").click(function () {
        var humSelId = this.id;
        $("#humImg").attr("src", imageDict[humSelId]);
        var compRandNum = Math.floor(Math.random() * Math.floor(3) + 1);
        $("#compImg").attr("src", imageDict[compImgRef[compRandNum]]);

        humSelected = scoreDict[humSelId];
        comSelected = compRandNum;

        if (humSelected != 0 && comSelected != 0) {
            if (humSelected != comSelected) {
                if (
                    (comSelected == 1 && humSelected == 3) ||
                    (comSelected == 2 && humSelected == 1) ||
                    (comSelected == 3 && humSelected == 2)
                ) {
                    compScore = compScore + 1;
                    $("#cScore").text(compScore);
                } else {
                    humScore = humScore + 1;
                    $("#hScore").text(humScore);
                }
            } else {
                console.log("Draw!");
            }
        }

        if (compScore == 5) {
            $(".winBoard").show();
            $(".winMsg").text("Computer Wins!");
        }
        if (humScore == 5) {
            $(".winBoard").show();
            $(".winMsg").text("Human Wins!");
        }
    });

    function resetValues() {
        $("#hScore").text("0");
        $("#cScore").text("0");
        $("#compImg").attr("src", "");
        $("#humImg").attr("src", "");
        compScore = 0;
        humScore = 0;
        comSelected = 0;
        humSelected = 0;
    }
    $(".okBtn").click(function () {
        resetValues();
        $(".winBoard").hide();
    });
});