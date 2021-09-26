var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "ABOUT ME";
	$scope.updateInfo = "Updated 69 minuted ago";
	$scope.verify = "Verify";
	$scope.des = "i am Dazk !";
	$scope.cv = "JOB";
	$scope.job1 = "NHIẾP ẢNH IT HUTECH";
	$scope.job2 = "ai.marketing";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "phungxuandoan2001@gmail.com";
	$scope.contact2 = "fb.com/l92.l68.08.05/";
	$scope.contactmi = "CONTACT ME";
	$scope.ifyou = "Nếu có thắc mắc gì thì liên hệ mình !";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "Youtube";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://fb.com/l92.l68.08.05/";
	$scope.linkzl = "https://zalo.me/0784806372";
	$scope.linksc = "https://www.youtube.com/channel/UCT_aNTdiNGQXyM2aHOVaajQ";
	$scope.linkgm = "kanpitest@gmail.com";
	$scope.phonenumber = "0784806372 - MOBIPHONE";
	$scope.email = "phungxuandoan2001@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "Gặp Crush <3 <3 <3";
	$scope.contentStory2 = "Có bồ rồi chia tay";
	$scope.storytitle1 = "Câu chuyện năm nhất";
	$scope.storytitle2 = "Câu chuyện năm high";
	$scope.nothinglikeus = "Thank for watching! ";
	$scope.thankall = "Cảm ơn mọi người đã ghé qua :)";
	$scope.au = "DAZK";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});