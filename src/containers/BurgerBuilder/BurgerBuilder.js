import React,{Component}  from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/burger.js';
import BuildControls from '../../components/burger/BuildControls/BuildControls.js';
import Modal from  '../../components/UI/Modal/Modal.js';
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary.js';
import axios from '../../axios-orders'; 
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../witherrorhandler/witherrorhandler';

const INGREDIENT_PRICES ={
    salad : 0.5,
    cheese: 0.4,
    meat : 1.3,
    bacon :0.6
};
class BurgerBuilder extends Component{
    state= {
        ingredients : {
            salad:0,bacon:0,cheese:0,meat:0
        },
        totalPrice : 4,
        purchasable :false,
        purchasing: false,
        loading:false
    }
    purchaseHandler = (type) => {
        this.setState({purchasing :true});
    }
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map(igKey =>{
            return ingredients[igKey];
        }).reduce( (sum,el)=> {return sum + el }  ,0 );
        this.setState({purchasable: sum>0 });
    }
    addIngredientHandler = (type) =>  {
        const oldCount = this.state.ingredients[type];
        const updatedCount= oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({totalPrice: newPrice,ingredients : updatedIngredients} );
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount>0)
        {
        const updatedCount= Math.max(0,oldCount-1);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceAddition;
        this.setState({totalPrice: newPrice,ingredients : updatedIngredients} );
        this.updatePurchaseState(updatedIngredients);
        }
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler = () =>{
        this.setState({loading:true})
        const orderObject={
            ingredients: this.state.ingredients,
            price:this.state.price,
            price:this.totalPrice,
            customer:{
                name:'kartik',
                address:{
                    street:'1h 29'
                }
            }
        }
        axios.post('/orders.json',orderObject)
        .then( response =>{
            this.setState({loading:false,purchasing:false});
            } )
        .catch(
         error=>{this.setState({loading:false,purchasing:false});}
        );
    };
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };for(let key in disabledInfo)
        {
            disabledInfo[key]= disabledInfo <=0;
        }
        let Order=<OrderSummary 
        price={this.state.totalPrice}
        ingredients={this.state.ingredients}
        purchaseContinued={this.purchaseContinueHandler}
        purchaseCanceled={this.purchaseCancelHandler}/>;
        if(this.state.loading){
            Order=<Spinner/>
        }
        return (
            <Aux>
                <Modal modalClose = {this.purchaseCancelHandler} show={this.state.purchasing}> 
                {Order}
                </Modal>
            <Burger ingredients={this.state.ingredients} />
            < BuildControls
            purchasable={this.state.purchasable} 
            ingredientAdded = {this.addIngredientHandler}
            ingredientremoved ={this.removeIngredientHandler}
            disabled = {disabledInfo} 
            ordered={this.purchaseHandler}
            price ={this.state.totalPrice}/>
            </Aux>
        );
    }
}
export default withErrorHandler(BurgerBuilder,axios);