<div class="pstR wWrap">
	<dl id="skipBox">
		<!-- skipBox s -->
		<dt><strong class="blind">바로가기 메뉴</strong></dt>
		<dd><a class="goDirect" href="#contents">본문 바로가기</a></dd>
		<dd><a class="goDirect" href="#lnb">메인메뉴 바로가기</a></dd>
		<!-- skipBox e -->
	</dl>
</div>

<div id="header">
	<div id="gnb">
		<div class="wWrap">
			<ul>
				<!-- gnb s -->
				<li class="gnbL"><a href="<?=$root?>/"><img src="<?=$root?>/skin/images/common/blt_main_home.png" alt="Home" /></a></li>
				<li class="gnbL"><a href="#none">고양시청</a></li>
				<li class="gnbR"><a href="<?=$root?>/sitemap/sitemap.html">SITEMAP</a></li>
				<li class="gnbR"><a href="#none">LOG-IN</a></li>
				<li class="gnbR"><a href="<?=$root?>/mypage/favorit_lec_list.html">MY PAGE</a></li>
				<!-- gnb e -->
			</ul>
		</div>
	</div>
	<div id="tnb">
		<div class="wWrap">
			<div id="topLogo"><a href="<?=$root?>/"><img src="<?=$root?>/skin/images/common/logo_top.png" alt="고양시 평생학습포털 로고" /></a></div>
			<div id="topSearchBox">
				<div class="select open" id="slct_cate">
					<span class="ctrl"><span class="arrow"></span></span>
					<button type="button" class="myValue">검색분야</button>
					<ul class="aList">
						<li><a href="#1">프로그램</a></li>
						<li><a href="#2">강사</a></li>
						<li><a href="#3">게시판</a></li>
					</ul>
				</div>
				<div class="searchWrap">
					<label for="search_input" class="blind">검색어 입력</label>
					<input type="text" id="search_input" placeholder="검색어 입력"/>
					<a href="#none" class="searchButton">통합검색</a>
				</div>
			</div>
		</div>
	</div>
	<div id="lnb">
		<div class="wWrap">
			<!-- lnb s -->
			<? include $d_root.'/include/lnb.php' ?>
			<!-- lnb e -->
		</div>
		<div id="lnb_2d_bg"></div>
	</div>
</div>
