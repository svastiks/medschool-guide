package medschoolguide.repository;

import medschoolguide.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    // Custom query to find replies by question ID
    List<Reply> findByQuestionId(String questionId);
}
