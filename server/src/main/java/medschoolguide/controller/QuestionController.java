package medschoolguide.controller;

import medschoolguide.entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class ReplyController {

    @Autowired
    private QuestionService replyService;

    @GetMapping("/{questionId}")
    public List<Question> getReplies(@PathVariable String questionId) {
        return replyService.getRepliesByQuestionId(questionId);
    }

    @PostMapping
    public Question postReply(@RequestBody Question question) {
        return replyService.saveReply(question);
    }
}
