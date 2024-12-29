package medschoolguide.service;

import medschoolguide.entity.Question;
import medschoolguide.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReplyService {

    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> getRepliesByQuestionId(String questionId) {
        return questionRepository.findByQuestionId(questionId);
    }

    public Question saveReply(Question question) {
        return questionRepository.save(question);
    }
}