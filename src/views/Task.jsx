import { PlusCircleIcon } from "@heroicons/react/24/solid";
import PageComponent from "../components/PageComponent"
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";

export default function Task() {

    const { tasks } = useStateContext();
    console.log(tasks)

    const onDeleteClick = () => {
        console.log("On Delete click");
    }


    return (

       <>
           <PageComponent
            title="Task" 
           buttons={( 
              <TButton color="green" to="/task/create">
                <PlusCircleIcon className="h-6 w-6 mr-2"/>
                    Create new
              </TButton>


           )}>
            <div className="grid lg:grid-cols-3 gap-5 mb-16">

                {tasks.map((task) => (
                    <SurveyListItem task={task} key={task.id} onDeleteClick={onDeleteClick} />
                ))}
        
            </div>
            </PageComponent>
        


        </>
    )


}

