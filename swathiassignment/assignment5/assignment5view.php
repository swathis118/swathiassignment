<!DOCTYPE html>
<html>
<head>
<title>Table with database</title>
<style>
table {
border-collapse: collapse;
width: 50%;
color: #588c7e;
font-family: monospace;
font-size: 20px;
text-align: left;
}
th {
background-color: #E6E6FA;
color: BLUE;
}
tr:nth-child(even) {background-color: #ead98b}
</style>
</head>
<body>
<table>
 <caption> registrations done </caption>
<tr>
<th>firstname</th>
<th>lastname</th>
<th>username</th>
<th>email</th>

</tr>
<?php
$conn = mysqli_connect("localhost", "root", "", "assignment5");
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT  firstname,lastname,username,email FROM registrationform";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
echo "<tr><td>" . $row["firstname"] . "</td><td>"
. $row["lastname"]. "</td><td>" . $row["username"] ."</td><td>" . $row["email"] . "</td></tr>" ;
}
echo "</table>";
} else { echo "0 results"; }
$conn->close();
?>
</table>
 
<a> </a>
</body>
</html>