package medschoolguide.controller;

import medschoolguide.entity.Question;
import medschoolguide.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/{id}")
    public List<Question> getQuestions(@PathVariable Long id) {
        return questionService.getQuestionsById(id);
    }

    @GetMapping("/all")
    public List<Question> getAllQuestions(){
        return questionService.getAllQuestions();
    }

    @PostMapping
    public Question postQuestion(@RequestBody Question question) {
        return questionService.saveQuestion(question);
    }
}
