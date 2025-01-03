package medschoolguide.repository;

import medschoolguide.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findQuestionById(Long id);
    List<Question> findAll();
}
