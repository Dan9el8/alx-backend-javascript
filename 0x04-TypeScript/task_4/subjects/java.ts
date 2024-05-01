namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeaching?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
  }
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava < 1) {
        return "No available teacher";
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}
