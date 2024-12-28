package medschoolguide.repository;

import medschoolguide.entity.Rankings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RankingRepository extends JpaRepository<Rankings, Integer> {
}
