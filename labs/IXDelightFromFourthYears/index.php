<!DOCTYPE php>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IXDelight | Letters from the 4th years</title>
    <link rel="stylesheet" href="css/style.css">
    <?php
        include php/connect.php;
    ?>
</head>
<body>
<main>
    <form class='mainContainer' name='letterSelection'>
        <h1>
            From us 4th years to your hearts...
        </h1>
        <label for='professorSelect'>
            Please select your name:
        </label>
        <span class='selectSpan'>
            <select id='professorSelect'>
                <option value='All'>All</option>
            </select>
        </span>
        <button type='submit'>
            Confirm
        </button>
    </form>
    <div class='mainLetter'>
        <h1>ProfName</h1>
        <h2>date</h2>
        <p>letterContent</p>
    </div>
</main>
    <script src="js/script.js"></script>
</body>

</html>