import style from './poll.module.scss';
import {useState} from "react";
import {addPollVote} from "../redux/reducers/pollSlice.js";
import {useDispatch} from "react-redux";

export default function Poll({data}) {
	console.log(data);

	return (
		<div className={style.pollWrapper}>
			<h3>{data.question}</h3>
			<div className={style.pollOptionsWrapper}>
				{data.options.map(((x, i) => (
					<PollOption
						text={x.text}
						votes={x.votes}
						question={data.question}
						key={x.text}
						voted={data.voted}
						voteIndex={data.chosenIndex === i}
					/>
				)))}
			</div>
		</div>
	)
}

function PollOption({text, votes, question, voted, voteIndex}) {
	const dispatch = useDispatch();

	const setOption = () => {
		console.log(text);

		if (!voted) {
			dispatch(addPollVote(
				{
					question: question,
					text: text
				}
			));
		}
	}

	return (
		<div className={style.pollOption} onClick={() => setOption()}>
			<input type="checkbox" checked={voteIndex} readOnly={!!voted}/>
			<span>{text}</span>
			{
				voted ? (<><span className={style.percentage}>{votes}</span>
					<div className={style.percentageBackground} style={{width: votes + "%"}}></div>
				</>) : null
			}
		</div>
	)
}