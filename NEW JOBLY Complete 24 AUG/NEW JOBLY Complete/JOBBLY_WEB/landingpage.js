// Simulate user login check (replace with your actual auth logic)
const isLoggedIn = localStorage.getItem("current_user");

// Feature slideshow HTML content (add more as needed)
const features = {
  jobs: {
    title: "Explore Job Listings",
    desc: "Find entry-level, internship, and graduate opportunities. Updated daily.",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=700&h=300&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=300&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&h=300&fit=crop"
    ]
  },
  cvBuilder: {
    title: "CV Builder",
    desc: "Create a professional CV with our easy-to-use builder, designed to highlight your skills and experience.",
    images: [
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=700&h=300&fit=crop", // person typing on laptop
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=300&fit=crop", // notebook + laptop
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=700&h=300&fit=crop"  // hands with keyboard
    ]
  },
  cvTemplates: {
    title: "CV Templates",
    desc: "Choose from modern, minimalist, ATS-friendly, and standout layouts to help your CV shine.",
    images: [
      "https://images.unsplash.com/photo-1581091870620-1e7e8f7f1f5e?w=700&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581090700227-1e7e8f7f1f5e?w=700&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091870620-1e7e8f7f1f5e?w=700&h=300&fit=crop"
    ]
  },
  skillsTraining: {
    title: "Skills Training",
    desc: "Upskill yourself with courses and workshops designed to enhance your career prospects.",
    images: [
      "https://images.unsplash.com/photo-1551836022-38a6dd12c2a7?w=700&h=300&fit=crop", // person with headset training
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=300&fit=crop", // teamwork workshop
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=300&fit=crop"  // coding training session
    ]
  },
  mentors: {
    title: "Connect with Mentors",
    desc: "Get personalized career advice from professionals in your field. Build confidence and discover new pathways.",
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&h=300&fit=crop",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=700&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&h=300&fit=crop"
    ]
  },
};


function showFeature(key) {
  const previewSection = document.getElementById("feature-preview");
  const topMessage = document.getElementById("top-message");

  if (!previewSection || !topMessage) return;

  topMessage.innerHTML = `<h2>Explore more on ${key.charAt(0).toUpperCase() + key.slice(1)}...</h2>`;
  topMessage.style.display = "block";

  if (!isLoggedIn) {
    // Show preview with animation (if slideshow HTML available)
    if (featureSlideshows[key]) {
      previewSection.innerHTML = featureSlideshows[key];
    } else {
      previewSection.innerHTML = "<p>Feature preview not available.</p>";
    }
  } else {
    // Redirect logged in users after showing message
    previewSection.innerHTML = `<p>Redirecting to ${key}.html...</p>`;
    setTimeout(() => {
      window.location.href = `${key}.html`;
    }, 1500);
  }
}
