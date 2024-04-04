import { Prisma } from "@prisma/client";

type QuestionWithAnswers = Prisma.QuestionGetPayload<{
 include: {
    answers: true;
 };
}>;

export default QuestionWithAnswers