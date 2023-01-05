from rest_framework import serializers
from .models import Habit
from rest_framework.reverse import reverse


class HabitSerializer(serializers.ModelSerializer):
    absolute_url = serializers.SerializerMethodField()

    class Meta:
        model = Habit
        fields = [
            "id",
            "name",
            "category",
            "measure_of_completion",
            "streaks",
            "absolute_url",
        ]

    def get_absolute_url(self, obj):
        return reverse('habit_detail', args=(obj.pk,))

class HabitDetailSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()

    class Meta:
        model = Habit
        fields = [
            'id',
            'name',
            'user',
            'category',
            'goal_description',
            'quantitative_goal',
            'quantitative_goal_units',
            'measure_of_completion',
            'update',
        ]

    def get_update(self, obj):
        return reverse('habit_update', args=(obj.pk,))
