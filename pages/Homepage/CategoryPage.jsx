import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "../../components/CategoryCard";
import { Colors } from "react-native-paper";
import { useSelector } from "react-redux";

const CategoryPage = () => {
  const data = useSelector((s) => s);
  let buisnesstotal = useSelector((s) => s.Buisnesstotal);
  let buisnessolved = useSelector((s) => s.Buisnessolved);
  let personaltotal = useSelector((s) => s.Personaltotal);
  let personalsolved = useSelector((s) => s.Personalsolved);
  console.log(personalsolved / personaltotal);
  return (
    <View style={{ alignItems: "center", marginTop: 40 }}>
      <View style={{ width: "85%" }}>
        <Text style={{ fontFamily: "SemiBold" }}>CATEGORIES</Text>
      </View>

      <View style={{ width: "85%", marginTop: 40, flexDirection: "row" }}>
        <ScrollView
          style={{ height: 150 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <CategoryCard
            tasks={buisnesstotal}
            category="Business"
            color={Colors.purple600}
            progress={buisnessolved / buisnesstotal}
          />
          <CategoryCard
            tasks={personaltotal}
            category="Personal"
            color={Colors.blue600}
            progress={personalsolved / personaltotal}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default CategoryPage;
