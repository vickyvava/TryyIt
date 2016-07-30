<?php
// Fetching Values from URL.
$name = $_POST['user'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = 'Visitor Contact Information';
$userSubject = 'Greetings From virtual Techies Team';

	// To send HTML mail, the Content-type header must be set.
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From:' . $email. "\r\n"; // Sender's Email
	$userheaders = 'MIME-Version: 1.0' . "\r\n";
	$userheaders .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$userheaders .= 'From:' . "ankit77parekh@gmail.com". "\r\n"; // Sender's Email
	$template = '<div style="padding:50px; color:black;">Hello Recruitio team,<br/>'
	. '<br/>A visitor on your website has send some message through Contact Us Page.<br/><br/>'
	. 'Name:' . $name . '<br/>'
	. 'Email:' . $email . '<br/>'
	. 'Message:' . $message . '<br/><br/>'
	. '<br/>'
	. '</div>';
	$sendmessage = "<div style=\"background-color:whitesmoke; color:black;\">" . $template . "</div>";
	// Message lines should not exceed 70 characters (PHP rule), so wrap it.
	$sendmessage = wordwrap($sendmessage, 70);
	// Send mail by PHP Mail Function.

	$userTemplate = '<div style="padding:50px; color:black;">Hello '.name.',<br/>'
	. 'Greetings From Virtual Techies Team'
	. '<br/>Our team Will Contact you shortly<br/><br/>'
	. '<br/>'
	. '</div>';

	$senduser = "<div style=\"background-color:whitesmoke; color:black;\">" . $userTemplate . "</div>";
	// Message lines should not exceed 70 characters (PHP rule), so wrap it.
	$senduser = wordwrap($senduser, 70);

	mail("ankit77parekh@gmail.com", $subject, $sendmessage, $headers,'-fankit77parekh@gmail');
	mail($email, $userSubject, $senduser, $userheaders,'-f'+$email);
	echo "Your Query has been received, We will contact you soon.";
?>