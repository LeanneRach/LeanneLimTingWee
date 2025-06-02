// root.js

const blogPosts = [
    {
      title: 'My First Blog Post',
      author: 'John Doe',
      date: 'June 1, 2023',
      content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
      isPrivate: true
    },
    {
      title: 'My Second Blog Post',
      author: 'Jane Smith',
      date: 'June 5, 2023',
      content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
      isPrivate: false
    },
    {
      title: 'A Day in the Life',
      author: 'Alice Johnson',
      date: 'June 10, 2023',
      content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
      isPrivate: false
    },
    {
      title: 'Tips for Healthy Eating',
      author: 'Bob Lee',
      date: 'June 15, 2023',
      content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
      isPrivate: true
    },
    {
      title: 'Traveling on a Budget',
      author: 'Susan White',
      date: 'June 20, 2023',
      content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
      isPrivate: false
    }
  ];

function Header(props) {
  return (
    <header>
      <h1>{props.sitetitle}</h1>
      <p>{props.tagline}</p>
    </header>
  );
}

function BlogPost(props) {
  return (
    <div className="blog-post">
      <h2>{props.title}</h2>
      <p className="meta">By {props.author} on {props.date}</p>
      <p>{props.content}</p>
    </div>
  )

}

function PrivateBlogPost(props) {
  return (
    <div className="private-posts">
      <h2>{props.title}</h2>
      <p className="meta">By {props.author} on {props.date}</p>
      <p>{props.content}</p>
    </div>
  )

}

function BlogList() {
  return (
    <ul>
      {blogPosts.map((post) =>
        post.isPrivate === false ? (
        <BlogPost
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
        ) : (
        <PrivateBlogPost
          title={post.title}
          author={post.author}
          date={post.date}
          content={"The content of this post is private"}
        />
      ))}
    </ul>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>© {props.year} My Blog. All rights reserved.</p>
    </footer>
  )

};

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Header sitetitle="My Blog" tagline="A blog about everything" />
      <BlogList />
      <Footer year={currentYear} />
    </div>
  );
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);