<?php
if(isset($_POST['email'])) {
	$msgTo="harrischristiansen@me.com";
	$msgSubject="Website Contact Submission";
	$nameFrom = $_POST['name'];
	$contactSubj = $_POST['subj'];
	$contactEmail = $_POST['email'];
	$userMsg = $_POST['userMsg'];
	
	function clean_string($string) {
		$bad = array("content-type","bcc:","to:","cc:","href");
		return str_replace($bad,"",$string);
	}
	
	$mailMsg="";
	$mailMsg .= "Name: ".clean_string($nameFrom)."\n";
	$mailMsg .= "Email: ".clean_string($contactEmail)."\n";
	$mailMsg .= "Subject: ".clean_string($contactSubj)."\n";
	$mailMsg .= "Comments: ".clean_string($userMsg)."\n";
	
	$headers = "From: contact@harrischristiansen.com";
	mail($msgTo,$msgSubject,$mailMsg,$headers);
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Sent - Redirecting</title>
<meta http-equiv="REFRESH" content="2;url=http://harrischristiansen.com"></HEAD>
<body>
Message Sent - Redirecting
</body>
</html>