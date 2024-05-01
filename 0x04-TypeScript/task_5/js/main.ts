interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(subject1: number, subject2: number): number {
  const MajorCredits = subject1 + subject2;
  return MajorCredits;
}

function sumMinorCredits(subject1: number, subject2: number): number {
  const MinorCredits = subject1 + subject2;
  return MinorCredits;
}
