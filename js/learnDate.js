$(document).ready(function () {
    $("#learnDate").html(Date());

    $("#clickToLearn").click(function () {
        $("#learnDate").toggle().html(Date());
    });
});