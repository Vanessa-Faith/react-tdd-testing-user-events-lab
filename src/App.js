import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: {
      frontend: false,
      backend: false,
      design: false
    }
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: {
        ...prev.interests,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedInterests = Object.entries(formData.interests)
    .filter(([_, value]) => value)
    .map(([key]) => key);

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <section>
        <h2>Newsletter Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <fieldset>
            <legend>Interests:</legend>
            <div>
              <input
                type="checkbox"
                id="frontend"
                name="frontend"
                checked={formData.interests.frontend}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="frontend">Frontend Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="backend"
                name="backend"
                checked={formData.interests.backend}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="backend">Backend Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="design"
                name="design"
                checked={formData.interests.design}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="design">Design</label>
            </div>
          </fieldset>

          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <div>
            <p>Thanks for signing up, {formData.name}!</p>
            {selectedInterests.length > 0 && (
              <p>Your interests: {selectedInterests.join(', ')}</p>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
