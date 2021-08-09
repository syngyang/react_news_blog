import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>News Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#3f51b5',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;

// <a href= "/"> ==> <Link to="/">
// <a href="/create"> ==> <Link to="/create">
// 인라인 스타일 style={{ }} 바깥은 Dynamic value, 안쪽은 object이므로 쌍 중괄호