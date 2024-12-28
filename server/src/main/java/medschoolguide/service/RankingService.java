package medschoolguide.service;

import medschoolguide.entity.Rankings;
import medschoolguide.repository.RankingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RankingService {

    private final RankingRepository rankingRepository;

    public RankingService(RankingRepository rankingRepository) {
        this.rankingRepository = rankingRepository;
    }

    public List<Rankings> getAllRankings() {
        return rankingRepository.findAll();
    }
}
