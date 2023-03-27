import s from './Header.module.css';

function Header(props) {
  return (
    <header className={ s.header }>
      <img alt="" src="https://avatars.mds.yandex.net/i?id=7a62cab87a3e094ac7fa23f2f4bbcfe7c822c8e7-4350902-images-thumbs&n=13" />
      <div>Hello</div>
    </header>
  )
};

export default Header;