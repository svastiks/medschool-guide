package medschoolguide.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Entity
@Table(name = "replies") // Maps this entity to the "replies" table in the database
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate the primary key
    private Long id; // Primary key for the entity

    @Column(name = "question_id", nullable = false)
    private String questionId; // Foreign key or reference to a question

    @Column(name = "author", nullable = false)
    private String author;

    @Column(name = "content", nullable = false, length = 500)
    private String content;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
