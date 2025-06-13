import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourseDetail } from '../api';
import withRole from '../hoc/withRoled';
import VideoModal from './VideoModal';

function CourseDetailBase() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    fetchCourseDetail(courseId).then(setCourse);
  }, [courseId]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <ul>
        {course.lessons.map((lesson, index) => (
          <li key={index}>
            {lesson}
            <button onClick={() => setShowVideo(true)}>▶ Play</button>
          </li>
        ))}
      </ul>
      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
    </div>
  );
}

export default function CourseDetail() {
  const { courseId } = useParams();
  const [role, setRole] = useState('');

  useEffect(() => {
    fetchCourseDetail(courseId).then((res) => setRole(res.role));
  }, [courseId]);

const ProtectedCourse = withRole(CourseDetailBase, ['student', 'instructor']);

  return <ProtectedCourse role={role} />;
}
