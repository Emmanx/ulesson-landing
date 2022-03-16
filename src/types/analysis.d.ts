export interface ITimespent {
  day: string;
  time_spent: number;
}

export interface IVideoLessonProgress {
  total_lessons: number;
  completed_lessons: number;
  completed_lessons_percent: number;
  total_chapters: number;
  completed_chapters: number;
}

export interface IHomeworkQuestionsAsked {
  performance: number;
  subject_name: string;
  subject_theme_key: string;
}

export interface ITestPerformance {
  total_test: number;
  test_questions_correct: number;
  test_attempted: number;
  average_time_per_question: number;
  performances: {
    performance: number;
    subject_name: string;
    subject_theme_key: string;
  }[];
}

export interface ISubjectTestPerformance {
  average_percent: number;
  average_time_per_question: number;
  easy_questions_percent: number;
  hard_questions_percent: number;
  intermediate_questions_percent: number;
  test_attempted: number;
  test_questions_correct: number;
  total_test: number;
}

export interface ITimeSpentLearning {
  today_learning_time: number;
  last_week_learning_time: number;
  this_week_learning_time: number;
  last_week_learning_percent_change: number | null;
  graph: {
    tests_attempted: ITimespent[];
    questions_asked: ITimespent[];
    video_lessons_watched: ITimespent[];
  };
}

export interface IClassAttendance {
  live_class_attended_this_week: number;
  live_class_replays_watched_this_week: number;
  total_attendance: number;
  graph: {
    day: string;
    attendance: 0;
  }[];
}

export interface ISubject {
  subject_id: number;
  subject_name: string;
  subject_theme_key: string;
}

export interface IBadge {
  id: number;
  description: string;
  key: string;
  display_name: string;
  subject_id: number;
  grades: number[];
  published_at: Date;
  icon_thumb: string;
  icon_updated_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface IBadgeEarned {
  badge_id: number;
  grade_id: number;
  awarded_at: Date;
  subject_id: number;
  subject_name: string;
}

export interface IGradeGroup {
  id: number;
  name: string;
  code: string;
  country_id: number;
  created_at: Date;
  updated_at: Date;
  display_name: string;
  heirarchy: number;
  enabled: number;
  pivot: {
    grade_id: 8;
    grade_group_id: number;
  };
}

export interface IGrade {
  id: number;
  name: string;
}

export interface IGradeExtended extends IGrade {
  value: number;
}
