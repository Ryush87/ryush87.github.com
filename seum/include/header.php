<div id="header">
	<div class="pstR wWrap">
		<dl id="skipBox">
			<!-- skipBox s -->
			<dt><strong class="blind">바로가기 메뉴</strong></dt>
			<dd><a class="goDirect" href="#lnb">메인메뉴 바로가기</a></dd>
			<dd><a class="goDirect" href="#contents">본문 바로가기</a></dd>
			<!-- skipBox e -->
		</dl>
	</div>
	<!-- quick s -->
	<div id="quickBox" class="quickBox">
		<div class="quickLogo">
			<img src="<?=$root?>/skin/images/common/logo_quick.png" alt="Quick Menu" />
			<a href="tel:15661269" class="callNum">1566<br />1269</a>
		</div>
		<ul class="quickMenu">
			<li><a href="#none">MAP</a></li>
			<li><a href="#none">FAQ</a></li>
			<li><a href="#none">A/S</a></li>
			<li><a href="#none">CONSULT</a></li>
		</ul>
		<ul class="quickShare">
			<li><a href="#none"><a href="<?=$root?>/"><img src="<?=$root?>/skin/images/common/q_icon_share_1.png" alt="Social" /></a></li>
			<li><a href="#none"><a href="<?=$root?>/"><img src="<?=$root?>/skin/images/common/q_icon_share_2.png" alt="Massege" /></a></li>
			<li><a href="#none"><a href="<?=$root?>/"><img src="<?=$root?>/skin/images/common/q_icon_share_3.png" alt="Cloud" /></a></li>
		</ul>
	</div>
	<!-- quick e -->
	<div id="lnb" class="lnb">
		<div class="wWrap">
			<div id="topLogo"><a href="<?=$root?>/"><img src="<?=$root?>/skin/images/common/logo_top.png" alt="세움주택" /></a></div>
			<div id="mMenu"><i class="fa fa-bars" aria-hidden="true"></i></div>
			<!-- lnb s -->
			<? include $d_root.'/include/lnb.php' ?>
			<!-- lnb e -->
		</div>
	</div>
</div>