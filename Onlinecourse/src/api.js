export const fetchCourses = () =>
  Promise.resolve([
    { id: 'react', title: 'React for Beginners' },
    { id: 'js', title: 'JavaScript Essentials' }
  ]);

export const fetchCourseDetail = (id) =>
  Promise.resolve({
    id,
    title: `${id} Course`,
    lessons: ['Intro', 'Basics', 'Advanced'],
   role: id === 'react' || id === 'js' ? 'student' : 'instructor'
  });
